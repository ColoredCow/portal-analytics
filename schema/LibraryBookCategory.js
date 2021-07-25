cube(`LibraryBookCategory`, {
  sql: `SELECT * FROM cc_portal.library_book_category`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    BookCategories: {
      sql: `${CUBE}.book_category_id = ${BookCategories}.id`,
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