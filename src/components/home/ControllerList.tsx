import React from "react";

const controllers = [
  { url: "https://localhost:5000/user", active: 1, passive: 2 },
  { url: "https://localhost:5000/teacher", active: 3, passive: 4 },
  { url: "https://localhost:5000/student", active: 5, passive: 6 },
];

const actions = [
  { url: "https://localhost:5000/user/getAllUser", status: "active" },
  { url: "https://localhost:5000/user/addUser", status: "active" },
  { url: "https://localhost:5000/user/deleteUser", status: "inactive" },
  { url: "https://localhost:5000/user/getById", status: "inactive" },
];

const StatusIndicator = ({ status }: { status: string }) => (
  <span
    className={`w-4 h-4 inline-block rounded-full ${
      status === "active" ? "bg-green-500" : "bg-red-500"
    }`}
  ></span>
);

const ControllerList = () => (
  <div className="border rounded-lg p-4 shadow-md w-1/2">
    <h2 className="text-lg font-bold mb-2">
      Şuanda sistemde çalışan controller
    </h2>
    <table className="w-full text-left">
      <thead>
        <tr>
          <th>URL</th>
          <th>Aktif</th>
          <th>Pasif</th>
        </tr>
      </thead>
      <tbody>
        {controllers.map((ctrl, index) => (
          <tr key={index}>
            <td>{ctrl.url}</td>
            <td>{ctrl.active}</td>
            <td>{ctrl.passive}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ActionList = () => (
  <div className="border rounded-lg p-4 shadow-md w-1/2">
    <h2 className="text-lg font-bold mb-2">
      Şuanda sistemde çalışan actionlar
    </h2>
    <ul>
      {actions.map((action, index) => (
        <li key={index} className="flex justify-between items-center mb-2">
          <span>{action.url}</span>
          <StatusIndicator status={action.status} />
        </li>
      ))}
    </ul>
  </div>
);

const SystemStatus = () => (
  <div className="flex gap-4 p-6">
    <ControllerList />
    <ActionList />
  </div>
);

export default SystemStatus;
