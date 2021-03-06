cube(`BookBorrower`, {
  sql: `SELECT * FROM book_borrower`,
  
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
      drillMembers: [createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `CONCAT(${CUBE}.user_id, ${CUBE}.library_book_id)`,
      type: `number`,
      primaryKey: true
    },

    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
