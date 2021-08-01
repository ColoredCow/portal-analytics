cube(`HrApplicationSegments`, {
  sql: `SELECT * FROM hr_application_segments`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    HrEvaluationSegments: {
      sql: `${CUBE}.evaluation_segment_id = ${HrEvaluationSegments}.id`,
      relationship: `belongsTo`
    },
    
    HrApplicationRound: {
      sql: `${CUBE}.application_round_id = ${HrApplicationRound}.id`,
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
    
    comments: {
      sql: `comments`,
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
