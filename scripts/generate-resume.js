import fs from 'fs';
import path from 'path';
import { Buffer } from 'node:buffer';

// Clean standard PDF-1.4 generator without third-party dependencies
function createTextPdf(lines, outputPath) {
  // We can construct a well-formed PDF with Helvetica font
  const contentStream = [
    'BT',
    '/F1 20 Tf',
    '50 750 Td',
    '(AVIRAJ ANIL LIGADE) Tj',
    '/F1 11 Tf',
    '0 -20 Td',
    '(B.Tech Computer Science & Engineering | Sinhgad College of Engineering | CGPA: 9.33/10) Tj',
    '0 -16 Td',
    '(Medshingi, Sangola, Maharashtra | avirajligade.sknscoe.comp@gmail.com | +91 9075694640) Tj',
    '0 -24 Td',
    '/F1 14 Tf',
    '(SUMMARY) Tj',
    '/F1 10 Tf',
    '0 -16 Td',
    '(Passionate Computer Science engineering student graduating in 2026 with strong foundations in) Tj',
    '0 -14 Td',
    '(Java, React.js, Spring Boot, MySQL, and full-stack software development.) Tj',
    '0 -24 Td',
    '/F1 14 Tf',
    '(EDUCATION) Tj',
    '/F1 10 Tf',
    '0 -16 Td',
    '(B.Tech in Computer Science & Engineering | Sinhgad College of Engineering, Pandharpur (2022-2026) | CGPA: 9.33) Tj',
    '0 -14 Td',
    '(HSC - Science | Sangola Vidyamandir Prashala Junior College (2022) | 57%) Tj',
    '0 -14 Td',
    '(SSC | DBK Sambhajirao Shende Vidyalaya, Medshingi (2020) | 83.40%) Tj',
    '0 -24 Td',
    '/F1 14 Tf',
    '(TECHNICAL SKILLS) Tj',
    '/F1 10 Tf',
    '0 -16 Td',
    '(Languages: Java, C | Web: React.js, HTML5, CSS3, Basic JavaScript, Bootstrap 5) Tj',
    '0 -14 Td',
    '(Backend: Node.js, Spring Boot | Databases: SQL, MySQL, MongoDB) Tj',
    '0 -14 Td',
    '(Mobile: Android Studio, Flutter, Dart, Java Basics | Tools: Git, GitHub) Tj',
    '0 -14 Td',
    '(Core CS: Data Structures & Algorithms in Java, OOP, DBMS) Tj',
    '0 -24 Td',
    '/F1 14 Tf',
    '(PROJECTS) Tj',
    '/F1 10 Tf',
    '0 -16 Td',
    '(1. Food Appointment System: React.js, Node.js, Spring Boot, MySQL, JWT, Razorpay, Cloudinary) Tj',
    '0 -13 Td',
    '(   - Advanced meal booking platform reducing restaurant wait times with 25% Razorpay upfront fee.) Tj',
    '0 -15 Td',
    '(2. Smart Farm Management System: Flutter, Dart, Android Studio, Firebase, PDF API) Tj',
    '0 -13 Td',
    '(   - Offline-first crop & expense management app for farmers with automated PDF generation.) Tj',
    '0 -15 Td',
    '(3. Cloud-Based Video Streaming Platform: React.js, Bootstrap 5, Node.js, Supabase, FFmpeg) Tj',
    '0 -13 Td',
    '(   - YouTube-inspired video streaming with multi-resolution transcoding and channel subscriptions.) Tj',
    '0 -24 Td',
    '/F1 14 Tf',
    '(INTERNSHIP & CERTIFICATIONS) Tj',
    '/F1 10 Tf',
    '0 -16 Td',
    '(Software Development Intern | QSpiders Software Testing Training Institute (Dec 2025 - July 2026)) Tj',
    '0 -14 Td',
    '(Certifications: NxtWave Gen AI, Spoken Tutorial PHP & MySQL, Spoken Tutorial Python) Tj',
    'ET'
  ].join('\n');

  const streamLength = Buffer.byteLength(contentStream, 'utf8');

  const objects = [];
  objects.push(`1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`);
  objects.push(`2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`);
  objects.push(`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n`);
  objects.push(`4 0 obj\n<< /Length ${streamLength} >>\nstream\n${contentStream}\nendstream\nendobj\n`);
  objects.push(`5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`);

  let header = '%PDF-1.4\n';
  let body = '';
  const xref = ['xref\n0 6\n0000000000 65535 f \n'];

  let currentOffset = Buffer.byteLength(header, 'utf8');

  for (let i = 0; i < objects.length; i++) {
    const padded = String(currentOffset).padStart(10, '0');
    xref.push(`${padded} 00000 n \n`);
    body += objects[i];
    currentOffset += Buffer.byteLength(objects[i], 'utf8');
  }

  const startxref = currentOffset;
  const trailer = `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${startxref}\n%%EOF\n`;

  const fullPdf = header + body + xref.join('') + trailer;
  fs.writeFileSync(outputPath, fullPdf, 'binary');
  console.log(`Resume generated successfully at ${outputPath}`);
}

const targetPath = path.resolve('public', 'Aviraj-Ligade-Resume.pdf');
createTextPdf([], targetPath);
