const _ = require("lodash");

const returnEmailTemplate = (visitRequest) => {

  const emailTemplate = {
    subject: "New visit request",
    html: `<table style="border-collapse: collapse;">

   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        name
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${visitRequest.name}
      </td>
    </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        phone
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${visitRequest.phone}
      </td>
    </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        email
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${visitRequest.email}
      </td>
    </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        address
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${visitRequest.address}
      </td>
    </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        service
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${visitRequest.service}
      </td>
    </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        Visit date
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${visitRequest.visit_date|| "-"}
      </td>
    </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        Visit time
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${visitRequest.visit_time}
      </td>
    </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        Call date
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${visitRequest.call_date || "-"}
      </td>
    </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        Call time
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${visitRequest.call_time}
      </td>
    </tr>

  </table>`,
    text: "New visit request",
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
