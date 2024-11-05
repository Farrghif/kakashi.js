canvas = document.getElementById('world');
C = canvas.getContext('2d');
// kulit wajah
C.fillStyle="wheat";
C.beginPath();
C.moveTo(90,90);
C.lineTo(110,200);
C.lineTo(130,250);
C.lineTo(190,290);
C.lineTo(260,250);
C.lineTo(270,200);
C.lineTo(271,90);
C.closePath();
C.stroke();
C.fill();

//putih mata
C.fillStyle='white'
C.beginPath();
C.ellipse(135, 120, 30, 20, 0, 0, 2 * Math.PI);
C.stroke();
C.fill();

C.fillStyle='white'
C.beginPath();
C.ellipse(220, 120, 30, 20, 0, 0, 2 * Math.PI);
C.stroke();
C.fill();

//pupil mata
C.fillStyle='black'
C.beginPath();
C.ellipse(135, 120, 12, 12, 0, 0, 2 * Math.PI);
C.stroke();
C.fill();

C.fillStyle='red'
C.beginPath();
C.ellipse(220, 120, 13, 13, 0, 0, 2 * Math.PI);
C.stroke();
C.fill();

C.fillStyle='red'
C.beginPath();
C.ellipse(220, 120, 2, 2, 0, 0, 2 * Math.PI);
C.stroke();
C.fill();

C.fillStyle='black'
C.beginPath();
C.moveTo(220,120);
C.lineTo(225,110);
C.lineTo(220,115)
C.stroke();
C.fill();
//masker
C.fillStyle='black'
C.beginPath();
C.moveTo(110,200);
C.lineTo(190,155);
C.lineTo(270,200);
C.lineTo(260,250);
C.lineTo(190,290);
C.lineTo(130,250);
C.stroke();
C.fill();

//ikat kepala
C.fillStyle='grey';
C.beginPath();
C.moveTo(80, 90);
C.lineTo(80, 60);
C.lineTo(280, 60);
C.lineTo(280,90);
C.closePath();
C.stroke();
C.fill();

C.fillStyle='white';
C.beginPath();
C.moveTo(120, 85);
C.lineTo(120, 65);
C.lineTo(220, 65);
C.lineTo(220,85);
C.closePath();
C.stroke();
C.fill();

//rambut
C.fillStyle='white'
C.beginPath();
C.moveTo(90, 60);
C.lineTo(130, -12);
C.lineTo(150,60)
C.lineTo(190, -12);
C.lineTo(180,60);
C.lineTo(160, -12);
C.lineTo(135,60);
C.lineTo(200, -12);
C.lineTo(220,60);
C.lineTo(240, -12);
C.lineTo(250,60);
C.lineTo(240, -12);
C.lineTo(250,60);
C.lineTo(245, -12);
C.lineTo(270,60);



C.closePath();
C.stroke();
C.fill();