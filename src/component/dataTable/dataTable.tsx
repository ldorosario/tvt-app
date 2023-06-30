import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function Table() {
  return (
    <div style={{ margin: "10px auto" }}>
      <DataTable
        value={[{ nome: "Membro de testes" }, { nome: "Membro de testes2" }]}
        tableStyle={{}}
        emptyMessage="Nenhum membro cadastrado."
      >
        <Column field="nome" header="Nome"></Column>
      </DataTable>
    </div>
  );
}
