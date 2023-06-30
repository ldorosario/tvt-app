import React from "react";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import Table from "../../component/dataTable/dataTable";

export default function Dashboard() {
  const items: MenuItem[] = [
    {
      label: "Membros",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "Novo",
          icon: "pi pi-fw pi-plus",
        },
        {
          label: "Lista membros",
          icon: "pi pi-fw pi-users",
        },
      ],
    },
    {
      label: "Sair",
      icon: "pi pi-fw pi-power-off",
      command: () => {
        localStorage.clear();
        window.location.href = "/";
      },
    },
  ];

  return (
    <div className="card">
      <Menubar model={items} />

      <Table />
    </div>
  );
}
