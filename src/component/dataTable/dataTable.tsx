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
                <b>Nome:</b> {membroSelecionado.nome}
               
                </p>
                <p className="m-0">
                  
                 <b>Entrada na equipe:</b> {membroSelecionado.dados?.entradaEquipe}
             
                </p>
                <p className="m-0">
                 
                  <b> Data nascimento:</b> {membroSelecionado.dados?.dataNascimento}
                </p>
                <p className="m-0">
                 
                 <b> RG:</b> {membroSelecionado.dados?.rg}
                </p>
                <p className="m-0">
                 
                <b> CPF:</b> {membroSelecionado.dados?.cpf}
                </p>
                <p className="m-0">
                 
                 <b> Telefone:</b> {membroSelecionado.dados?.telefone}
                </p>
                <p className="m-0">
                 
                 <b> Email:</b> {membroSelecionado.dados?.email}
                </p>
                <p className="m-0">
                 
                 <b> Endereço:</b> {membroSelecionado.dados?.endereco}
                </p>
                <p className="m-0">
                 
                <b> Tipo sanguíneo:</b> {membroSelecionado.dados?.tipoSangue}
                </p>
                  <p className="m-0">
                 
                <b> Alergias:</b> {membroSelecionado.dados?.alergias}
                </p>
                <p className="m-0">
                 
                 <b> Hospital de preferência:</b> {membroSelecionado.dados?.hospitalPreferencia}
                </p>
                <p className="m-0">
                 
                 <b> Contato de emergência:</b> {membroSelecionado.dados?.contatosEmergencia}
                </p>
                <p className="m-0">
                 
                 <b> Medicamento de uso contínuo:</b> {membroSelecionado.dados?.medicamentoUsoCont}
                </p>
                <p className="m-0">
                 
                 <b> Problema de saúde:</b> {membroSelecionado.dados?.problemaSaude}
                </p>
                <p className="m-0">
                 
                 <b> Plano de saúde:</b> {membroSelecionado.dados?.planoSaude}
                </p>
              
            </Dialog>
    </div>
  );
}
