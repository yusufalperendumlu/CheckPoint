const controllers = [
  { url: "https://localhost:5000/user", active: 1, passive: 2 },
  { url: "https://localhost:5000/teacher", active: 3, passive: 4 },
  { url: "https://localhost:5000/student", active: 5, passive: 6 },
];

const ControllersList = () => (
  <div className="border-2 rounded-lg p-4 border-white text-gray-400">
    <h3 className="text-center font-semibold">
      Şuanda sistemde çalışan controller
    </h3>
    <table className="w-full mt-2">
      <thead>
        <tr>
          <th className="text-left">URL</th>
          <th>Aktif</th>
          <th>Pasif</th>
        </tr>
      </thead>
      <tbody>
        {controllers.map((controller, index) => (
          <tr key={index}>
            <td>{controller.url}</td>
            <td className="text-center">{controller.active}</td>
            <td className="text-center">{controller.passive}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ControllersList;
