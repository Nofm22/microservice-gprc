import { Employee, Employees } from "xero-node";
import { xero } from "../app";
import { createToketSet } from "../getRefreshToken";

export async function createEmployee(data) {
  const tokenSet = await createToketSet();
  xero.setTokenSet(tokenSet);
  await xero.updateTenants();
  const xeroTenantId = xero.tenants[0].tenantId;
  const summarizeErrors = true;
  const employee: Employee = data;

  const employees: Employees = {
    employees: [employee],
  };
  const response = await xero.accountingApi.createEmployees(
    xeroTenantId,
    employees,
    summarizeErrors
  );
  return response.body || response.response.statusCode;
}
export async function getEmployees() {
  const tokenSet = await createToketSet();
  xero.setTokenSet(tokenSet);
  await xero.updateTenants();
  const xeroTenantId = xero.tenants[0].tenantId;
  const ifModifiedSince: Date = new Date("2020-02-06T12:17:43.202-08:00");
  const where = 'Status=="ACTIVE"';
  const order = "LastName ASC";
  const response = await xero.accountingApi.getEmployees(
    xeroTenantId,
    ifModifiedSince,
    where,
    order
  );
  return response.body || response.response.statusCode;
}
