cube(`Tags`, {
  sql: `SELECT * FROM   tags`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, tagName, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    tagName: {
      sql: `tag_name`,
      type: `string`
    },
    
    slug: {
      sql: `slug`,
      type: `string`
    },
    
    icon: {
      sql: `icon`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    backgroundColor: {
      sql: `background_color`,
      type: `string`
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
