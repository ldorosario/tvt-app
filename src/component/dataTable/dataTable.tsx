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
                Nome: {membroSelecionado.nome}
               
                </p>
                <p className="m-0">
                  
                 Entrada na equipe:{membroSelecionado.dados?.entradaEquipe}
             
                </p>
                <p className="m-0">
                 
                  Data nascimento:{membroSelecionado.dados?.dataNascimento}
                </p>
                <p className="m-0">
                 
                  RG: {membroSelecionado.dados?.rg}
                </p>
                <p className="m-0">
                 
                CPF: {membroSelecionado.dados?.cpf}
                </p>
                <p className="m-0">
                 
                  Telefone: {membroSelecionado.dados?.telefone}
                </p>
                <p className="m-0">
                 
                  Email: {membroSelecionado.dados?.email}
                </p>
                <p className="m-0">
                 
                  Endereço: {membroSelecionado.dados?.endereco}
                </p>
                <p className="m-0">
                 
                  Tipo sanguíneo: {membroSelecionado.dados?.tipoSangue}
                </p>
                  <p className="m-0">
                 
                  Alergias: {membroSelecionado.dados?.alergias}
                </p>
                <p className="m-0">
                 
                  Hospital de preferência: {membroSelecionado.dados?.hospitalPreferencia}
                </p>
                <p className="m-0">
                 
                  Contato de emergência: {membroSelecionado.dados?.contatoEmergencia}
                </p>
                <p className="m-0">
                 
                  Medicamento de uso contínuo: {membroSelecionado.dados?.medicamentoUsoCont}
                </p>
                <p className="m-0">
                 
                  Problema de saúde: {membroSelecionado.dados?.problemaSaude}
                </p>
                <p className="m-0">
                 
                  Plano de saúde: {membroSelecionado.dados?.planoSaude}
                </p>
            </Dialog>
    </div>
  );
}
