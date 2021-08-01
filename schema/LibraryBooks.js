cube(`LibraryBooks`, {
  sql: `SELECT * FROM library_books`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, title, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    author: {
      sql: `author`,
      type: `string`
    },
    
    isbn: {
      sql: `isbn`,
      type: `string`
    },
    
    thumbnail: {
      sql: `thumbnail`,
      type: `string`
    },
    
    readableLink: {
      sql: `readable_link`,
      type: `string`
    },
    
    selfLink: {
      sql: `self_link`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    },
    
    deletedAt: {
      sql: `deleted_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
