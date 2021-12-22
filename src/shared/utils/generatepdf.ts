import "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { awareness, communication, transmission } from "../constants/services";
import { queryClient } from "../state/store";
import { AmbitType } from "../types/process";
import { getAllInteractions } from "./allInteractions";

const { pdfMake } = window;
pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfMake.vfs;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const document: { content: any[]; styles: any } = {
  content: [],
  styles: {
    header: {
      fontSize: 18,
      bold: true,
      margin: [0, 0, 0, 10],
    },
    subheader: {
      fontSize: 16,
      bold: true,
      margin: [0, 10, 0, 5],
    },
    tableExample: {
      margin: [0, 5, 0, 15],
    },
    tableHeader: {
      bold: true,
      fontSize: 13,
      color: "black",
    },
  },
};

export const generatePdf = (ambitId: string) => {
  const ambit = queryClient.getQueryData(["ambit", ambitId]) as AmbitType;
  document.content.push({ text: `Requirements for ambit ${ambit.name}`, style: "header" });

  ambit.graph.roles.forEach((role) => {
    document.content.push({ text: `Interactions for role ${role.name}:`, style: "subheader" });
    const interactions = getAllInteractions(ambitId, role.id);
    interactions.forEach((inter) => {
      const services = inter.services.map((service) => service.service);
      const cServices = services.filter((service) => communication.includes(service)).join(", ");
      const tServices = services.filter((service) => transmission.includes(service)).join(", ");
      const aServices = services.filter((service) => awareness.includes(service)).join(", ");
      document.content.push(`With ${inter.roleName}`);
      document.content.push({
        style: "tableExample",
        table: {
          unbreakable: true,
          widths: ["*", "*", "*"],
          body: [
            ["Communication services", "Transmission services", "Awareness services"],
            [
              cServices.length > 0 ? cServices : { text: "No services", italics: true },
              tServices.length > 0 ? tServices : { text: "No services", italics: true },
              aServices.length > 0 ? aServices : { text: "No services", italics: true },
            ],
          ],
        },
      });
    });
  });
  pdfMake.createPdf(document).open();
};
