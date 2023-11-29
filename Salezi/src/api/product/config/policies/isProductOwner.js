module.exports = async (ctx, next) => {
    const { id } = ctx.params;
    const { user } = ctx.state;
  
    const product = await strapi.services.product.findOne({ id });
  
    if (!product || !user || product.created_by.id !== user.id) {
      return ctx.unauthorized(`You can only update your own products.`);
    }
  
    await next();
  };
  