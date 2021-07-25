cube(`BookWishlist`, {
  sql: `SELECT * FROM cc_portal.book_wishlist`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Users: {
      sql: `${CUBE}.user_id = ${Users}.id`,
      relationship: `belongsTo`
    },
    
    LibraryBooks: {
      sql: `${CUBE}.library_book_id = ${LibraryBooks}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    
  },
  
  dataSource: `default`
});
