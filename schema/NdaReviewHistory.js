cube(`NdaReviewHistory`, {
  sql: `SELECT * FROM nda_review_history`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    NdaMeta: {
      sql: `${CUBE}.nda_meta_id = ${NdaMeta}.id`,
      relationship: `belongsTo`
    },
    
    ProspectNdaMeta: {
      sql: `${CUBE}.nda_meta_id = ${ProspectNdaMeta}.nda_meta_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    action: {
      sql: `action`,
      type: `string`
    },
    
    reason: {
      sql: `reason`,
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
