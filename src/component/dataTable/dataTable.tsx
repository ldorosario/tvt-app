import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from 'primereact/dialog';
import { membrosEstaticos } from "../../dados/Membros";


export default function Table() {
  const [membroSelecionado, setMembroSelecionado] = useState<any>([]);
  const [visible, setVisible] = useState(false);
  

  
  return (
    <div style={{ margin: "0px auto" }}>
      <DataTable
        value={membrosEstaticos}
        tableStyle={{color:'green'}}
        emptyMessage="Nenhum membro cadastrado."
        selectionMode="single"
        onSelectionChange={(e:any) => {setMembroSelecionado(e.value); setVisible(true)}}
        dataKey="nome"
      
        
      >
        <Column field="nome" header="TVT Membros"></Column>
      </DataTable>
            <Dialog header="Dados" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <p className="m-0">
                  {membroSelecionado.nome}
               
                </p>
                <p className="m-0">
                  
                  {membroSelecionado.dados?.entradaEquipe}
             
                </p>
                <p className="m-0">
                 
                  {membroSelecionado.dados?.dataNascimento}
                </p>
                <p className="m-0">
                 
                  {membroSelecionado.dados?.rg}
                </p>
                <p className="m-0">
                 
                  {membroSelecionado.dados?.cpf}
                </p>
                <p className="m-0">
                 
                  {membroSelecionado.dados?.telefone}
                </p>
                <p className="m-0">
                 
                  {membroSelecionado.dados?.email}
                </p>
                <p className="m-0">
                 
                  {membroSelecionado.dados?.endereco}
                </p>
                <p className="m-0">
                 
                  {membroSelecionado.dados?.tipoSangue}
                </p>
                  <p className="m-0">
                 
                  {membroSelecionado.dados?.alergias}
                </p>
                <p className="m-0">
                 
                  {membroSelecionado.dados?.hospitalPreferencia}
                </p>
                <p className="m-0">
                 
                  {membroSelecionado.dados?.contatoEmergencia}
                </p>
                <p className="m-0">
                 
                  {membroSelecionado.dados?.medicamentoUsoCont}
                </p>
                <p className="m-0">
                 
                  {membroSelecionado.dados?.problemaSaude}
                </p>
                <p className="m-0">
                 
                  {membroSelecionado.dados?.planoSaude}
                </p>
              
            </Dialog>
    </div>
  );
}
