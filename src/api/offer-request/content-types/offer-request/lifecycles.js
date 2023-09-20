const _ = require("lodash");

const returnEmailTemplate = (offerRequest) => {
  const emailTemplate = {
    subject: "New Offer request",
    html: `<table style="border-collapse: collapse;">

   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        offer
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${offerRequest.offer.title}
      </td>
    </tr>
    <tr>
    <th align="left" style="border:1px solid #000;padding:8px;">
      name
    </th>
    <td align="left" style="border:1px solid #000;padding:8px;">
      ${offerRequest.name}
    </td>
  </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        phone
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${offerRequest.phone}
      </td>
    </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        email
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${offerRequest.email}
      </td>
    </tr>
   <tr>
      <th align="left" style="border:1px solid #000;padding:8px;">
        address
      </th>
      <td align="left" style="border:1px solid #000;padding:8px;">
        ${offerRequest.address}
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
    console.log(result);
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
