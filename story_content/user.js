window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script3 = function()
{
  (function () {

    var doc = parent.document || document;

    // create canvas
    var canvas = doc.createElement("canvas");
    doc.body.appendChild(canvas);

    var ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "99999";

    let particles = [];

    // 💥 BLAST PARTICLES
    function createBlast() {
        for (let i = 0; i < 60; i++) {
            let angle = Math.random() * Math.PI * 2;
            let speed = 4 + Math.random() * 4;

            particles.push({
                type: "blast",
                x: canvas.width / 2,
                y: canvas.height / 2,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                size: 4 + Math.random() * 4,
                color: `hsl(${Math.random()*360},80%,60%)`,
                life: 60
            });
        }
    }

    // ⭐ STARS
    function createStar() {
        particles.push({
            type: "star",
            x: Math.random() * canvas.width,
            y: -20,
            size: 8 + Math.random() * 10,
            speedY: 2 + Math.random() * 2,
            color: `hsl(${Math.random()*360},80%,60%)`,
            angle: Math.random() * 360
        });
    }

    function drawStar(x, y, size, color, rotation) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation * Math.PI / 180);

        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
            ctx.lineTo(
                Math.cos((18 + i * 72) * Math.PI / 180) * size,
                -Math.sin((18 + i * 72) * Math.PI / 180) * size
            );
            ctx.lineTo(
                Math.cos((54 + i * 72) * Math.PI / 180) * (size / 2),
                -Math.sin((54 + i * 72) * Math.PI / 180) * (size / 2)
            );
        }
        ctx.closePath();

        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();
    }

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, i) => {

            // 💥 BLAST
            if (p.type === "blast") {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.1;
                p.life--;

                ctx.fillStyle = p.color;
                ctx.fillRect(p.x, p.y, p.size, p.size);

                if (p.life <= 0) particles.splice(i, 1);
            }

            // ⭐ STAR
            if (p.type === "star") {
                p.y += p.speedY;
                p.angle += 4;

                drawStar(p.x, p.y, p.size, p.color, p.angle);

                if (p.y > canvas.height + 50) particles.splice(i, 1);
            }

        });

        requestAnimationFrame(animate);
    }

    // 🎬 SEQUENCE

    createBlast();

    // delay stars
    setTimeout(() => {
        let interval = setInterval(createStar, 150);
        setTimeout(() => clearInterval(interval), 3000);
    }, 400);

    animate();

    // cleanup
    setTimeout(() => canvas.remove(), 6000);

})();
}

window.Script4 = function()
{
  (function () {

    var doc = parent.document || document;

    // create canvas
    var canvas = doc.createElement("canvas");
    doc.body.appendChild(canvas);

    var ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "99999";

    let particles = [];

    // 💥 BLAST PARTICLES
    function createBlast() {
        for (let i = 0; i < 60; i++) {
            let angle = Math.random() * Math.PI * 2;
            let speed = 4 + Math.random() * 4;

            particles.push({
                type: "blast",
                x: canvas.width / 2,
                y: canvas.height / 2,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                size: 4 + Math.random() * 4,
                color: `hsl(${Math.random()*360},80%,60%)`,
                life: 60
            });
        }
    }

    // ⭐ STARS
    function createStar() {
        particles.push({
            type: "star",
            x: Math.random() * canvas.width,
            y: -20,
            size: 8 + Math.random() * 10,
            speedY: 2 + Math.random() * 2,
            color: `hsl(${Math.random()*360},80%,60%)`,
            angle: Math.random() * 360
        });
    }

    function drawStar(x, y, size, color, rotation) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation * Math.PI / 180);

        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
            ctx.lineTo(
                Math.cos((18 + i * 72) * Math.PI / 180) * size,
                -Math.sin((18 + i * 72) * Math.PI / 180) * size
            );
            ctx.lineTo(
                Math.cos((54 + i * 72) * Math.PI / 180) * (size / 2),
                -Math.sin((54 + i * 72) * Math.PI / 180) * (size / 2)
            );
        }
        ctx.closePath();

        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();
    }

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, i) => {

            // 💥 BLAST
            if (p.type === "blast") {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.1;
                p.life--;

                ctx.fillStyle = p.color;
                ctx.fillRect(p.x, p.y, p.size, p.size);

                if (p.life <= 0) particles.splice(i, 1);
            }

            // ⭐ STAR
            if (p.type === "star") {
                p.y += p.speedY;
                p.angle += 4;

                drawStar(p.x, p.y, p.size, p.color, p.angle);

                if (p.y > canvas.height + 50) particles.splice(i, 1);
            }

        });

        requestAnimationFrame(animate);
    }

    // 🎬 SEQUENCE

    createBlast();

    // delay stars
    setTimeout(() => {
        let interval = setInterval(createStar, 150);
        setTimeout(() => clearInterval(interval), 3000);
    }, 400);

    animate();

    // cleanup
    setTimeout(() => canvas.remove(), 6000);

})();
}

window.Script5 = function()
{
  (function () {

    var doc = parent.document || document;

    // create canvas
    var canvas = doc.createElement("canvas");
    doc.body.appendChild(canvas);

    var ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "99999";

    let particles = [];

    // 💥 BLAST PARTICLES
    function createBlast() {
        for (let i = 0; i < 60; i++) {
            let angle = Math.random() * Math.PI * 2;
            let speed = 4 + Math.random() * 4;

            particles.push({
                type: "blast",
                x: canvas.width / 2,
                y: canvas.height / 2,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                size: 4 + Math.random() * 4,
                color: `hsl(${Math.random()*360},80%,60%)`,
                life: 60
            });
        }
    }

    // ⭐ STARS
    function createStar() {
        particles.push({
            type: "star",
            x: Math.random() * canvas.width,
            y: -20,
            size: 8 + Math.random() * 10,
            speedY: 2 + Math.random() * 2,
            color: `hsl(${Math.random()*360},80%,60%)`,
            angle: Math.random() * 360
        });
    }

    function drawStar(x, y, size, color, rotation) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation * Math.PI / 180);

        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
            ctx.lineTo(
                Math.cos((18 + i * 72) * Math.PI / 180) * size,
                -Math.sin((18 + i * 72) * Math.PI / 180) * size
            );
            ctx.lineTo(
                Math.cos((54 + i * 72) * Math.PI / 180) * (size / 2),
                -Math.sin((54 + i * 72) * Math.PI / 180) * (size / 2)
            );
        }
        ctx.closePath();

        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();
    }

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, i) => {

            // 💥 BLAST
            if (p.type === "blast") {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.1;
                p.life--;

                ctx.fillStyle = p.color;
                ctx.fillRect(p.x, p.y, p.size, p.size);

                if (p.life <= 0) particles.splice(i, 1);
            }

            // ⭐ STAR
            if (p.type === "star") {
                p.y += p.speedY;
                p.angle += 4;

                drawStar(p.x, p.y, p.size, p.color, p.angle);

                if (p.y > canvas.height + 50) particles.splice(i, 1);
            }

        });

        requestAnimationFrame(animate);
    }

    // 🎬 SEQUENCE

    createBlast();

    // delay stars
    setTimeout(() => {
        let interval = setInterval(createStar, 150);
        setTimeout(() => clearInterval(interval), 3000);
    }, 400);

    animate();

    // cleanup
    setTimeout(() => canvas.remove(), 6000);

})();
}

window.Script6 = function()
{
  (function () {

    var doc = parent.document || document;

    // create canvas
    var canvas = doc.createElement("canvas");
    doc.body.appendChild(canvas);

    var ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "99999";

    let particles = [];

    // 💥 BLAST PARTICLES
    function createBlast() {
        for (let i = 0; i < 60; i++) {
            let angle = Math.random() * Math.PI * 2;
            let speed = 4 + Math.random() * 4;

            particles.push({
                type: "blast",
                x: canvas.width / 2,
                y: canvas.height / 2,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                size: 4 + Math.random() * 4,
                color: `hsl(${Math.random()*360},80%,60%)`,
                life: 60
            });
        }
    }

    // ⭐ STARS
    function createStar() {
        particles.push({
            type: "star",
            x: Math.random() * canvas.width,
            y: -20,
            size: 8 + Math.random() * 10,
            speedY: 2 + Math.random() * 2,
            color: `hsl(${Math.random()*360},80%,60%)`,
            angle: Math.random() * 360
        });
    }

    function drawStar(x, y, size, color, rotation) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation * Math.PI / 180);

        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
            ctx.lineTo(
                Math.cos((18 + i * 72) * Math.PI / 180) * size,
                -Math.sin((18 + i * 72) * Math.PI / 180) * size
            );
            ctx.lineTo(
                Math.cos((54 + i * 72) * Math.PI / 180) * (size / 2),
                -Math.sin((54 + i * 72) * Math.PI / 180) * (size / 2)
            );
        }
        ctx.closePath();

        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();
    }

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, i) => {

            // 💥 BLAST
            if (p.type === "blast") {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.1;
                p.life--;

                ctx.fillStyle = p.color;
                ctx.fillRect(p.x, p.y, p.size, p.size);

                if (p.life <= 0) particles.splice(i, 1);
            }

            // ⭐ STAR
            if (p.type === "star") {
                p.y += p.speedY;
                p.angle += 4;

                drawStar(p.x, p.y, p.size, p.color, p.angle);

                if (p.y > canvas.height + 50) particles.splice(i, 1);
            }

        });

        requestAnimationFrame(animate);
    }

    // 🎬 SEQUENCE

    createBlast();

    // delay stars
    setTimeout(() => {
        let interval = setInterval(createStar, 150);
        setTimeout(() => clearInterval(interval), 3000);
    }, 400);

    animate();

    // cleanup
    setTimeout(() => canvas.remove(), 6000);

})();
}

};
