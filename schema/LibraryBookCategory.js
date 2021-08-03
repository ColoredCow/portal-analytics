cube(`LibraryBookCategory`, {
  sql: `SELECT * FROM library_book_category`,
  
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
    id: {
      sql: `CONCAT(${CUBE}.book_category_id, ${CUBE}.library_book_id)`,
      type: `number`,
      primaryKey: true
    },
  },
  
  dataSource: `default`
});
