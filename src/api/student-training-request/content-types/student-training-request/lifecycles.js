const _ = require("lodash");

const returnEmailTemplate = (trainingRequest) => {

  const emailTemplate = {
    subject: "New training request",
    html: `<table style="border-collapse: collapse;">

   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        name
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${trainingRequest.name}
      </td>
    </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        phone
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${trainingRequest.phone}
      </td>
    </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        email
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${trainingRequest.email}
      </td>
    </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        address
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${trainingRequest.address}
      </td>
    </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        college
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${trainingRequest.college}
      </td>
    </tr>
    <tr>
    <th align="left" style="border:1px solid #000;padding:8px;">
      Experience
    </th>
    <td align="left" style="border:1px solid #000;padding:8px;">
      ${trainingRequest.experience}
    </td>
  </tr>

  </table>`,
    text: "New training request",
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
      //send email with the training request data for each employee
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
