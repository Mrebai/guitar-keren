import guitars from './ccessories';


export default {

  Query: {
    allGuitars(obj, args) {
      return guitars.find({}, { skip: args.perPage * args.page, limit: args.perPage }).fetch();
    },
    _allGuitarsMeta(obj, args) {
      return { count: Math.ceil(guitars.find().count() / args.perPage) };
    },
    Guitar(obj, { id }) {
      return guitars.findOne({ _id: id });
    },
  },

  Guitar: {
    id: post => (post._id),
  },
  Mutation: {
    createGuitar(obj, {
      id,
      name,
      brand,
      brand_id,
      descritopn,
      price,
      oldPrice,
      unitsSold,
      comments,
      inStock,
    }) {
      const res = guitars.insert(
        {
          id,
          name,
          brand,
          brand_id,
          descritopn,
          price,
          oldPrice,
          unitsSold,
          comments,
          inStock,
        },
      );
      return guitars.findOne(res);
    },
    updateGuitar(obj,
      {
        id,
        name,
        brand,
        brand_id,
        descritopn,
        price,
        oldPrice,
        unitsSold,
        comments,
        inStock,
      }) {
      guitars.update({
        _id: id,
        name,
        brand,
        brand_id,
        descritopn,
        price,
        oldPrice,
        unitsSold,
        comments,
        inStock,
      }, {
        $set: {
          _id: id,
          name,
          brand,
          brand_id,
          descritopn,
          price,
          oldPrice,
          unitsSold,
          comments,
          inStock,
        },
      });
      return guitars.findOne({ _id: id });
    },
    deleteGuitar(obj, { id }) {
      const res = guitars.remove({ _id: id });

      return (((res)) !== 0) ? { data: id } : { data: 'failed ' };
    },
  },

};
