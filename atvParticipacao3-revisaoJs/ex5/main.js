import path from "path";
import { leArquivoStream } from "./modulo-stream.js";

const filePath = path.resolve('./arquivo-html.html')

leArquivoStream(filePath)