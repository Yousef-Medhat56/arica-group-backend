const _ = require("lodash");

const returnEmailTemplate = (maintenanceRequest) => {

  const emailTemplate = {
    subject: "New maintenance request",
    html: `<table style="border-collapse: collapse;">

   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        name
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${maintenanceRequest.name}
      </td>
    </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        phone
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${maintenanceRequest.phone}
      </td>
    </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        email
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${maintenanceRequest.email}
      </td>
    </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        address
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${maintenanceRequest.address}
      </td>
    </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        service
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${maintenanceRequest.service}
      </td>
    </tr>
    <tr>
    <th align="left" style="border:1px solid #000;padding:8px;">
      problem details
    </th>
    <td align="left" style="border:1px solid #000;padding:8px;">
      ${maintenanceRequest.details}
    </td>
  </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        Visit date
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${maintenanceRequest.visit_date|| "-"}
      </td>
    </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        Visit time
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${maintenanceRequest.visit_time}
      </td>
    </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        Call date
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${maintenanceRequest.call_date || "-"}
      </td>
    </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        Call time
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${maintenanceRequest.call_time}
      </td>
    </tr>

  </table>`,
    text: "New maintenance request",
  };

  return emailTemplate;
};

module.exports = {
  async afterCreate(event) {
    // Connected to "Save" button in admin panel
    const { result } = event;

    // get employees emails
    const employees = await strapi.entityService.findMany(
      "api::employee.employee",
      {
        fields: ["email"],
      }
    );

    try {
      //send email with the visit request data for each employee
      employees.forEach(async (employee) => {
        await strapi.plugins["email"].services.email.sendTemplatedEmail(
          {
            to: employee.email,
          },
          returnEmailTemplate(result)
        );
      });

      console.log("Email sent ✅");
    } catch (err) {
      console.log(err);
    }
  },
};
