import { createEmployee, getEmployees } from "../services/employess.service";

export const createEmployeeController = async (req, res) => {
  try {
    const employee: any = await createEmployee(req.body);

    res.status(200).send({
      statusCode: 200,
      data: employee.employees ? employee.employees : employee,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "error",
    });
  }
};
export const getEmployeeController = async (req, res) => {
  try {
    const employees: any = await getEmployees();

    res.status(200).send({
      statusCode: 200,
      data: employees,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "error",
    });
  }
};
