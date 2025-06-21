const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'game',
        width: '100%',
        height: '100%',
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#ffffff',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: false
        }
    },
    scene: {
        preload,
        create,
        update
    }
};

let background;
let cursors;
let playerMoving = false;
let player;
let ground;
let score = 0;
let scoreText;
let hearts;
const worldWidth = 6000;

const game = new Phaser.Game(config);

function preload() {
    this.load.image('background', 'assets/background.png');
    this.load.image('heart', 'assets/heart.png');
    this.load.image('rock', 'assets/rock.png');
    this.load.image('box', 'assets/box.png');
    this.load.image('furkan', 'assets/furkan.png');

    // Müzik ve ses efektleri
    this.load.audio('endingSong', 'assets/birthday-song.mp3'); // Doğum günü şarkısı

    // Karakter animasyonları
    for (let i = 1; i <= 16; i++) this.load.image('idle' + i, `assets/idle/Idle (${i}).png`);
    for (let i = 1; i <= 30; i++) this.load.image('jump' + i, `assets/jump/Jump (${i}).png`);
    for (let i = 1; i <= 20; i++) this.load.image('run' + i, `assets/run/Run (${i}).png`);
    for (let i = 1; i <= 20; i++) this.load.image('walk' + i, `assets/walk/Walk (${i}).png`);
}

function create() {
    this.ending = false;

    const bgTexture = this.textures.get('background').getSourceImage();
    const bgWidth = bgTexture.width;
    const bgHeight = bgTexture.height;

    const screenWidth = this.scale.width;
    const screenHeight = this.scale.height;
    const ratio = bgHeight / bgWidth;
    const desiredHeight = screenWidth * ratio;
    const yOffset = (screenHeight - desiredHeight) / 2 - 70;

    background = this.add.tileSprite(0, yOffset, screenWidth, desiredHeight, 'background')
        .setOrigin(0, 0)
        .setScrollFactor(0);

    cursors = this.input.keyboard.createCursorKeys();

    this.scale.on('resize', (gameSize) => {
        const newHeight = gameSize.width * ratio;
        const newYOffset = (gameSize.height - newHeight) / 2 - 70;
        background.setSize(gameSize.width, newHeight);
        background.setDisplaySize(gameSize.width, newHeight);
        background.y = newYOffset;
    });

    
    // === KARAKTERİ EKLE ===
    const animDefs = [
        { key: 'idle', prefix: 'idle', end: 16, rate: 8 },
        { key: 'jump', prefix: 'jump', end: 30, rate: 15 },
        { key: 'run',  prefix: 'run',  end: 20, rate: 12 },
        { key: 'walk', prefix: 'walk', end: 20, rate: 10 }
    ];

    for (let def of animDefs) {
        let frames = [];
        for (let i = 1; i <= def.end; i++) {
            frames.push({ key: def.prefix + i });
        }
        this.anims.create({
            key: def.key,
            frames,
            frameRate: def.rate,
            repeat: -1
        });
    }

    player = this.physics.add.sprite(200, screenHeight - 200, 'idle1');
    player.setScale(0.25);
    player.setCollideWorldBounds(true);
    player.play('idle');

    this.physics.world.setBounds(0, 0, worldWidth, this.scale.height);
    player.setCollideWorldBounds(true);

    this.cameras.main.startFollow(player, true, 0.08, 0.08);
    this.cameras.main.setBounds(0, 0, worldWidth, this.scale.height);

    //SKOR METNİ
    scoreText = this.add.text(this.scale.width - 180, 20, 'Skor: 0', {
    fontFamily: 'Chewy',
    fontSize: '36px',
    color: '#ffffff',
    stroke: '#000000',
    strokeThickness: 4
    }).setScrollFactor(0);

    // Ekran yeniden boyutlandırıldığında skor yerini ayarla
    this.scale.on('resize', (gameSize) => {
        scoreText.setPosition(gameSize.width - 20, 20);
    });

    // ENGELLER
    obstacles = this.physics.add.staticGroup();
    
    let rock1 = obstacles.create(1000, this.scale.height - 140, 'rock')
        .setScale(0.13);
    // Taşın çarpışma kutusunu görsel boyutuna göre ayarla
    rock1.body.setSize(20,20);     // biraz daha geniş
    rock1.body.setOffset(5,5);  // daha az offset
    rock1.refreshBody();

    // 1. Kutu (en altta)
    let box1 = obstacles.create(1800, this.scale.height - 200, 'box').setScale(0.10);
    box1.body.setSize(20, 20);          // Görsel boyutuna göre daha dar kare
    box1.body.setOffset(5, 5);          // Ortalamak için hafif offset
    box1.refreshBody();

    // 2. Kutu (biraz sağda ve yüksekte)
    let box2 = obstacles.create(2000, this.scale.height - 300, 'box').setScale(0.10);
    box2.body.setSize(20, 20);          // Görsel boyutuna göre daha dar kare
    box2.body.setOffset(5, 5);          // Ortalamak için hafif offset
    box2.refreshBody();

    // 3. Kutu (en sağda ve en yüksekte)
    let box3 = obstacles.create(2200, this.scale.height - 400, 'box').setScale(0.10);
    box3.body.setSize(20, 20);          // Görsel boyutuna göre daha dar kare
    box3.body.setOffset(5, 5);          // Ortalamak için hafif offset
    box3.refreshBody();

    let rock2 = obstacles.create(2700, this.scale.height - 140, 'rock')
        .setScale(0.13);
    // Taşın çarpışma kutusunu görsel boyutuna göre ayarla
    rock2.body.setSize(20,20);     // biraz daha geniş
    rock2.body.setOffset(5,5);  // daha az offset
    rock2.refreshBody();

    let rock3 = obstacles.create(2800, this.scale.height - 140, 'rock')
        .setScale(0.13);
    // Taşın çarpışma kutusunu görsel boyutuna göre ayarla
    rock3.body.setSize(20,20);     // biraz daha geniş
    rock3.body.setOffset(5,5);  // daha az offset
    rock3.refreshBody();

    let rock4 = obstacles.create(2800, this.scale.height - 225, 'rock')
        .setScale(0.13);
    // Taşın çarpışma kutusunu görsel boyutuna göre ayarla
    rock4.body.setSize(20,20);     // biraz daha geniş
    rock4.body.setOffset(5,5);  // daha az offset
    rock4.refreshBody();

    let box4 = obstacles.create(3200, this.scale.height - 400, 'box').setScale(0.10);
    box4.body.setSize(20, 20);          // Görsel boyutuna göre daha dar kare
    box4.body.setOffset(5, 5);          // Ortalamak için hafif offset
    box4.refreshBody();

    let box5 = obstacles.create(3400, this.scale.height - 280, 'box').setScale(0.10);
    box5.body.setSize(20, 20);          // Görsel boyutuna göre daha dar kare
    box5.body.setOffset(5, 5);          // Ortalamak için hafif offset
    box5.refreshBody();

    let box6 = obstacles.create(3600, this.scale.height - 160, 'box').setScale(0.10);
    box6.body.setSize(20, 20);          // Görsel boyutuna göre daha dar kare
    box6.body.setOffset(5, 5);          // Ortalamak için hafif offset
    box6.refreshBody();

    let box7 = obstacles.create(3450, this.scale.height - 520, 'box').setScale(0.10);
    box7.body.setSize(20, 20);          // Görsel boyutuna göre daha dar kare
    box7.body.setOffset(5, 5);          // Ortalamak için hafif offset
    box7.refreshBody();

    let box8 = obstacles.create(3650, this.scale.height - 520, 'box').setScale(0.10);
    box8.body.setSize(20, 20);          // Görsel boyutuna göre daha dar kare
    box8.body.setOffset(5, 5);          // Ortalamak için hafif offset
    box8.refreshBody();

    let box9 = obstacles.create(3850, this.scale.height - 520, 'box').setScale(0.10);
    box9.body.setSize(20, 20);          // Görsel boyutuna göre daha dar kare
    box9.body.setOffset(5, 5);          // Ortalamak için hafif offset
    box9.refreshBody();

    //Son engel
    furkan = obstacles.create(5800, this.scale.height - 200, 'furkan')
    .setScale(0.20); // ihtiyaca göre büyüt/küçült
    furkan.body.setSize(furkan.width * 0.8, furkan.height * 0.9); // Hitbox ayarı
    furkan.body.setOffset(furkan.width * 0.1, furkan.height * 0.1);
    furkan.refreshBody();

    this.physics.add.collider(player, obstacles);


    // Kalpleri static group olarak oluştur
    hearts = this.physics.add.staticGroup();

    // Sabit konumlarda duracak kalpler (örnek)
    hearts.create(1000, this.scale.height - 250, 'heart').setScale(0.1).refreshBody();
    hearts.create(1400, this.scale.height - 160, 'heart').setScale(0.1).refreshBody();
    hearts.create(1800, this.scale.height - 300, 'heart').setScale(0.1).refreshBody();
    hearts.create(2000, this.scale.height - 400, 'heart').setScale(0.1).refreshBody();
    hearts.create(2200, this.scale.height - 500, 'heart').setScale(0.1).refreshBody();
    hearts.create(2400, this.scale.height - 600, 'heart').setScale(0.1).refreshBody();
    hearts.create(2500, this.scale.height - 600, 'heart').setScale(0.1).refreshBody();

    hearts.create(2700, this.scale.height - 240, 'heart').setScale(0.1).refreshBody();
    hearts.create(2800, this.scale.height - 325, 'heart').setScale(0.1).refreshBody();

    hearts.create(3200, this.scale.height - 500, 'heart').setScale(0.1).refreshBody();
    hearts.create(3400, this.scale.height - 380, 'heart').setScale(0.1).refreshBody();
    hearts.create(3600, this.scale.height - 260, 'heart').setScale(0.1).refreshBody();
    hearts.create(3450, this.scale.height - 620, 'heart').setScale(0.1).refreshBody();
    hearts.create(3650, this.scale.height - 620, 'heart').setScale(0.1).refreshBody();
    hearts.create(3850, this.scale.height - 620, 'heart').setScale(0.1).refreshBody();

    hearts.create(4100, this.scale.height - 160, 'heart').setScale(0.1).refreshBody();
    hearts.create(4250, this.scale.height - 160, 'heart').setScale(0.1).refreshBody();
    hearts.create(4400, this.scale.height - 160, 'heart').setScale(0.1).refreshBody();
    hearts.create(4550, this.scale.height - 160, 'heart').setScale(0.1).refreshBody();
    hearts.create(4700, this.scale.height - 160, 'heart').setScale(0.1).refreshBody();
    hearts.create(4850, this.scale.height - 160, 'heart').setScale(0.1).refreshBody();
    hearts.create(5000, this.scale.height - 160, 'heart').setScale(0.1).refreshBody();


    this.physics.add.overlap(player, hearts, collectHeart, null, this);


    // ZEMİN OLUŞTUR
    const groundHeight = 120; // ayarlanabilir

    ground = this.physics.add.staticGroup();
    ground.create(worldWidth / 2, this.scale.height - groundHeight / 2, null)
        .setDisplaySize(worldWidth, groundHeight)
        .setVisible(false)
        .refreshBody();

    // Karakter ile zemini çarpıştır
    this.physics.add.collider(player, ground);

    // Konfeti fonksiyonunu sahneye bağla
    this.createConfetti = createConfetti.bind(this);
}

function update() {
    playerMoving = false;

    if (!player) return; // Oyuncu henüz yoksa bekle

    // Sağa/Sola hareket
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
        player.setFlipX(true);
        player.play('walk', true);
        playerMoving = true;
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.setFlipX(false);
        player.play('walk', true);
        playerMoving = true;
    } else {
        player.setVelocityX(0);
        player.play('idle', true);
    }

    // Zıplama (space tuşuna basıldığında ve yere temas varsa)
    if (cursors.space.isDown && player.body.blocked.down) {
        player.setVelocityY(-350);
        player.play('jump', true);
    }

    // Arka plan hareketi
    if (playerMoving) {
        if (cursors.right.isDown) {
            background.tilePositionX += 2;
        } else if (cursors.left.isDown) {
            background.tilePositionX -= 2;
        }
    }

    background.tilePositionX = this.cameras.main.scrollX;

    // Oyunun sonuna gelindiyse final sahnesini tetikle
    if (player.x >= furkan.x - 150 && !this.ending) {
        this.ending = true; // bir daha tetiklenmesin

        // Müziği çal
        this.sound.play('endingSong', { volume: 0.7 });

        player.setVelocityX(0);      // durdur
        player.anims.stop();         // animasyonu durdur
        player.play('idle');         // idle animasyonuna geç

        // Tuşları kilitle
        cursors.left.reset();
        cursors.right.reset();
        cursors.space.reset();

        // Karakteri Furkan'a doğru yavaşça hareket ettir
        this.tweens.add({
            targets: player,
            x: furkan.x - 100,
            duration: 2000,
            ease: 'Power2'
        });

        // Ana mesaj (büyük ve etkileyici)
        const mainMessage = this.add.text(
            this.cameras.main.scrollX + this.cameras.main.width / 2,
            80,
            "🎉 İYİ Kİ DOĞDUN! 🎉",
            {
                fontFamily: 'Chewy',
                fontSize: '52px',
                color: '#ff1493',
                stroke: '#ffffff',
                strokeThickness: 8,
                shadow: {
                    offsetX: 3,
                    offsetY: 3,
                    color: '#000000',
                    blur: 5,
                    fill: true
                }
            }
        ).setOrigin(0.5);

        // Mesajı büyütme animasyonu
        this.tweens.add({
            targets: mainMessage,
            scaleX: 1.2,
            scaleY: 1.2,
            duration: 1000,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        // Alt mesaj (daha küçük)
        const subMessage = this.add.text(
            this.cameras.main.scrollX + this.cameras.main.width / 2,
            150,
            "Seni ÇOK seviyorummm aşkımmm",
            {
                fontFamily: 'Chewy',
                fontSize: '32px',
                color: '#ff69b4',
                stroke: '#ffffff',
                strokeThickness: 4
            }
        ).setOrigin(0.5);

        // Skor mesajı
        const scoreMessage = this.add.text(
            this.cameras.main.scrollX + this.cameras.main.width / 2,
            200,
            `Topladığın kalp sayısı: ${score} 💕`,
            {
                fontFamily: 'Chewy',
                fontSize: '28px',
                color: '#ffb6c1',
                stroke: '#ffffff',
                strokeThickness: 3
            }
        ).setOrigin(0.5);

        // Konfeti efekti (renkli yıldızlar)
        this.createConfetti();

        // Mesajları yukarıdan aşağıya animasyonla göster
        mainMessage.setAlpha(0);
        subMessage.setAlpha(0);
        scoreMessage.setAlpha(0);

        this.tweens.add({
            targets: mainMessage,
            alpha: 1,
            y: 80,
            duration: 1500,
            ease: 'Back.easeOut'
        });

        this.tweens.add({
            targets: subMessage,
            alpha: 1,
            y: 150,
            duration: 1500,
            delay: 500,
            ease: 'Back.easeOut'
        });

        this.tweens.add({
            targets: scoreMessage,
            alpha: 1,
            y: 200,
            duration: 1500,
            delay: 1000,
            ease: 'Back.easeOut'
        });

        // Arka planı hafif karart
        const overlay = this.add.rectangle(
            this.cameras.main.scrollX + this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            this.cameras.main.width,
            this.cameras.main.height,
            0x000000,
            0.3
        ).setScrollFactor(0);

        // Furkan'ı vurgula
        this.tweens.add({
            targets: furkan,
            scaleX: 1.3,
            scaleY: 1.3,
            duration: 2000,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });
    }

}

function updateScore(amount = 1) {
    score += amount;
    scoreText.setText('Skor: ' + score);
}

function collectHeart(player, heart) {
    heart.destroy(); // Kalp sahneden silinir
    updateScore();   // Skor 1 artar
}

// Konfeti efekti oluştur
function createConfetti() {
    const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff, 0xffa500, 0xff1493];
    
    for (let i = 0; i < 50; i++) {
        const confetti = this.add.graphics();
        const color = colors[Math.floor(Math.random() * colors.length)];
        confetti.fillStyle(color);
        
        // Farklı şekiller oluştur
        const shapeType = Math.floor(Math.random() * 3);
        
        if (shapeType === 0) {
            // Daire
            confetti.fillCircle(0, 0, 3);
        } else if (shapeType === 1) {
            // Dikdörtgen
            confetti.fillRect(-4, -2, 8, 4);
        } else {
            // Üçgen
            confetti.fillTriangle(-3, 3, 3, 3, 0, -3);
        }
        
        // Rastgele pozisyon
        const x = Math.random() * this.cameras.main.width;
        const y = -20;
        
        confetti.setPosition(x, y);
        
        // Düşme animasyonu
        this.tweens.add({
            targets: confetti,
            y: this.cameras.main.height + 20,
            rotation: Math.random() * 10,
            duration: 3000 + Math.random() * 2000,
            ease: 'Power1',
            onComplete: () => {
                confetti.destroy();
            }
        });
        
        // Sallanma animasyonu
        this.tweens.add({
            targets: confetti,
            x: x + (Math.random() - 0.5) * 100,
            duration: 1000,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });
    }
}

