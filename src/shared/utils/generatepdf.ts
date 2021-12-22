import { jsPDF as JsPDF } from "jspdf";
import "jspdf-autotable";
import { queryClient } from "../state/store";
import { AmbitType } from "../types/process";
import { getAllInteractions } from "./allInteractions";

export const generatePdf = (ambitId: string) => {
  const doc = new JsPDF();
  const ambit = queryClient.getQueryData(["ambit", ambitId]) as AmbitType;
  let visited = false;
  ambit.graph.roles.forEach((role) => {
    const interactions = getAllInteractions(ambitId, role.id);
    doc.text(`Interactions of ${role.name}`, 15, (doc as any).lastAutoTable.finalY + 15 || 15);
    interactions.forEach((inter) => {
      const services = inter.services.map((service) => service.service).join(", ");
      (doc as any).autoTable({
        startY: (doc as any).lastAutoTable.finalY + (visited ? 5 : 20) || 20,
        head: [[inter.roleName]],
        body: [[services.length === 0 ? "No services" : services]],
      });
      visited = true;
    });
    visited = false;
  });
  doc.save("table.pdf");
};
