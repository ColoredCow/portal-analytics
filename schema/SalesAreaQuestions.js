cube(`SalesAreaQuestions`, {
  sql: `SELECT * FROM sales_area_questions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    SalesAreas: {
      sql: `${CUBE}.sales_area_id = ${SalesAreas}.id`,
      relationship: `belongsTo`
    },
    
    SalesQuestions: {
      sql: `${CUBE}.sales_question_id = ${SalesQuestions}.id`,
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
