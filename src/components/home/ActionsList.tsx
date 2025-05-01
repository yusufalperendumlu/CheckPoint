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

const ActionsList = () => (
  <div className="relative border-2 rounded-lg p-4 w-[40rem] border-white text-gray-400">
    <h2 className="text-center font-semibold">
      Şuanda sistemde çalışan actionlar
    </h2>
    <ul className="mt-2 space-y-2">
      {actions.map((action, index) => (
        <li key={index} className="flex justify-between items-center mb-2">
          <span>{action.url}</span>
          <StatusIndicator status={action.status} />
        </li>
      ))}
    </ul>
  </div>
);

export default ActionsList;
