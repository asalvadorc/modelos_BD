import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { Presentation, PresentationFile } from "@oai/artifact-tool";
import sharp from "sharp";

const workspaceDir = "C:/Antigravity/Modelos_BD";
const TMP_DIR = path.join(workspaceDir, ".codex-build/bd-impacto");
const SKILL_DIR = "C:/Users/as_co/.codex/plugins/cache/openai-primary-runtime/presentations/26.903.11726/skills/presentations";
const FINAL_PPTX = path.join(workspaceDir, "output/Bases_de_datos_sociedad_y_ciberseguridad_final.pptx");
const RUNTIME_PYTHON = "C:/Users/as_co/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe";
const { resolvePresentationFont, finalizePresentation } = await import(pathToFileURL(path.join(SKILL_DIR, "container_tools/artifact_tool_utils.mjs")).href);
const font = resolvePresentationFont({ fontFamily: "Aptos", availableFonts: ["Aptos"] });
const imageBytes = new Uint8Array(await fs.readFile(path.join(TMP_DIR, "storyboard.png")));
const meta = await sharp(imageBytes).metadata();
const tileW = Math.floor(meta.width / 4);
const tileH = Math.floor(meta.height / 2);
const tiles = [];
for (let i = 0; i < 8; i++) {
  const left = (i % 4) * tileW;
  const top = Math.floor(i / 4) * tileH;
  tiles.push(new Uint8Array(await sharp(imageBytes).extract({ left: left + 22, top: top + 14, width: tileW - 44, height: tileH - 28 }).png().toBuffer()));
}

const deck = Presentation.create({ slideSize: { width: 1280, height: 720 } });
const slides = [
  {
    title:"La infraestructura invisible",
    sub:"Bases de datos, sociedad y ciberseguridad",
    note:"Imagina que todas las bases de datos desaparecieran durante cinco minutos. Tu banco no sabría cuánto dinero tienes. Un hospital no podría consultar historiales médicos. Las aerolíneas perderían sus reservas y el instituto, sus matrículas. Las bases de datos sostienen casi toda nuestra sociedad digital."
  },
  {
    title:"Datos que adquieren sentido",
    sub:"Organización, relaciones, consultas y control de acceso",
    note:"Una base de datos reúne información organizada para consultarla y actualizarla con eficacia. Un sistema gestor añade control de acceso, relaciones entre datos, validación y concurrencia. Así, muchos usuarios pueden trabajar sobre información coherente sin convertirla en una colección de ficheros aislados."
  },
  {
    title:"Una tecnología presente todo el día",
    sub:"Sanidad · banca · educación · transporte · comercio",
    note:"Cuando pagas con tarjeta, una base de datos comprueba la cuenta y registra la operación. Hospitales, centros educativos, comercios, videojuegos y transportes dependen de ellas. La inteligencia artificial también necesita grandes cantidades de datos bien almacenados y gobernados."
  },
  {
    title:"Cada problema necesita una estructura",
    sub:"Relacionales · documentales · clave-valor · grafos · vectoriales",
    note:"Las bases relacionales conectan tablas y destacan cuando la consistencia resulta crítica. Las documentales aceptan estructuras flexibles. Las bases clave-valor priorizan búsquedas muy rápidas. Los grafos representan conexiones y ayudan a detectar fraude o calcular rutas. Las vectoriales localizan contenidos por similitud y tienen un papel creciente en la inteligencia artificial."
  },
  {
    title:"Servicios que no pueden detenerse",
    sub:"Réplicas, alta disponibilidad y recuperación",
    note:"Muchos servicios deben funcionar las veinticuatro horas. Las réplicas permiten que otro servidor continúe cuando uno falla. Las copias de seguridad facilitan la recuperación tras errores, averías o ataques. Para ASIR, una base de datos debe funcionar, rendir y poder recuperarse."
  },
  {
    title:"Los datos se han convertido en objetivo",
    sub:"Filtraciones · ransomware · inyección SQL · sabotaje",
    note:"Una filtración puede exponer credenciales, domicilios o información médica. El ransomware puede cifrar la base y detener una organización. Una inyección SQL aprovecha consultas construidas de forma insegura. Alterar registros silenciosamente puede causar aún más daño que robarlos."
  },
  {
    title:"La defensa necesita varias capas",
    sub:"Mínimo privilegio · cifrado · MFA · auditoría · copias aisladas",
    note:"Cada cuenta debe tener solo los permisos necesarios. El cifrado protege comunicaciones y datos sensibles. La autenticación multifactor reduce el riesgo de cuentas robadas. Los registros de auditoría ayudan a investigar incidentes. Las copias deben mantenerse aisladas y probarse mediante restauraciones reales."
  },
  {
    title:"Proteger los datos protege a las personas",
    sub:"Confidencialidad · integridad · disponibilidad",
    note:"La confidencialidad limita el acceso a quienes están autorizados. La integridad mantiene los datos correctos y detecta modificaciones. La disponibilidad permite utilizarlos cuando hacen falta. En una sociedad construida sobre datos, proteger una base de datos significa proteger servicios, derechos y personas. Pregunta final: ¿qué sería más peligroso en un hospital, robar los datos, borrarlos o modificarlos sin que nadie lo detecte?"
  },
];

function addText(slide, text, pos, size, weight, color="#FFFFFF") {
  const box = slide.shapes.add({ geometry:"textbox", position:pos, fill:"none", line:{fill:"none",width:0} });
  box.text = text;
  box.text.style = { typeface:font, fontSize:size, bold:weight, color, autoFit:"shrinkText", verticalAlignment:"middle" };
  return box;
}

slides.forEach((s, i) => {
  const slide = deck.slides.add();
  slide.background.fill = "#06131F";
  slide.images.add({ blob:tiles[i], contentType:"image/png", alt:`Escena ${i+1}: ${s.title}`, fit:"cover", position:{left:0,top:0,width:1280,height:720} });
  slide.shapes.add({ geometry:"rect", position:{left:0,top:0,width:1280,height:720}, fill:{color:"#04101B",transparency:38}, line:{fill:"none",width:0} });
  slide.shapes.add({ geometry:"rect", position:{left:0,top:480,width:1280,height:240}, fill:{color:"#02080F",transparency:16}, line:{fill:"none",width:0} });
  addText(slide, String(i+1).padStart(2,"0"), {left:72,top:54,width:90,height:45}, 18, true, "#55DDF4");
  addText(slide, s.title, {left:72,top:492,width:1120,height:78}, i===0?46:40, true);
  addText(slide, s.sub, {left:76,top:576,width:1110,height:54}, 21, false, "#D8F6FA");
  slide.speakerNotes.textFrame.setText(s.note + "\n\nImagen generada con IA para esta presentación. Contenido técnico preparado para 1.º de ASIR.");
});

const stagingDir = path.join(workspaceDir, ".codex-finalizer");
await fs.mkdir(stagingDir, {recursive:true});
await fs.mkdir(path.dirname(FINAL_PPTX), {recursive:true});
const candidatePath = path.join(stagingDir, "bd-impacto-candidate.pptx");
await (await PresentationFile.exportPptx(deck)).save(candidatePath);

const result = await finalizePresentation({
  workspaceDir,
  candidatePath,
  finalPath:FINAL_PPTX,
  pythonExecutable:RUNTIME_PYTHON,
  integrityValidatorPath:path.join(SKILL_DIR,"container_tools/inspect_presentation_package_integrity.py"),
  layoutValidatorPath:path.join(SKILL_DIR,"container_tools/inspect_presentation_layout_geometry.py"),
  layoutArgs:["--expected-slide-size-emu","12192000,6858000","--validate-heading-fit"],
  explicitTotalSlideCount:8,
  requiredNativeTableOwnerSlides:[],
  requiredNativeChartOwnerSlides:[],
  fontPolicy:{basis:"design",families:[font]},
  verifyArtifactToolImport:true,
  receiptPath:path.join(stagingDir,"bd-impacto-final.validation.json"),
});
console.log(JSON.stringify({finalPath:FINAL_PPTX,result},null,2));
