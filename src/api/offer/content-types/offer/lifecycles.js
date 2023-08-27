const { ApplicationError } = require("@strapi/utils").errors;

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;

    const [{ id: accessoryServiceId }] = await strapi.entityService.findMany(
      "api::service.service",
      {
        fields: ["id"],
        filters: { name: ["Accessories", "الإكسسوارات"] },
        locale: data.locale,
        limit: 1,
      }
    );

    if (!data.service) {
      throw new ApplicationError("Choose the service related to the offer");
    } else if (accessoryServiceId === data.service && !data.accessory_type) {
      throw new ApplicationError("Choose the accessory type");
    } else if (accessoryServiceId !== data.service && data.accessory_type) {
    } else if (
      accessoryServiceId === data.service &&
      !data.price_before_discount
    ) {
      throw new ApplicationError("Enter the price before discount");
    } else if (accessoryServiceId !== data.service) {
      data.accessory_type = null;
      data.price_before_discount = null;
    }
    console.log(data);
  },

  async beforeUpdate(event) {
    const { data, where } = event.params;

    const { locale: offerLocale } = await strapi.entityService.findOne(
      "api::offer.offer",
      where.id,
      { fields: ["locale"] }
    );

    const [{ id: accessoryServiceId }] = await strapi.entityService.findMany(
      "api::service.service",
      {
        fields: ["id"],
        filters: { name: ["Accessories", "الإكسسوارات"] },
        locale: offerLocale,
        limit: 1,
      }
    );

    if (!data.service && data.service !== undefined) {
      throw new ApplicationError("Choose the service related to the offer");
    } else if (accessoryServiceId === data.service && !data.accessory_type) {
      throw new ApplicationError("Choose the accessory type");
    } else if (
      accessoryServiceId === data.service &&
      !data.price_before_discount
    ) {
      throw new ApplicationError("Enter the price before discount");
    } else if (accessoryServiceId !== data.service && data.accessory_type) {
      data.accessory_type = null;
    }
    console.log(data);
  },
};
