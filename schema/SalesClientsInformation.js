cube(`SalesClientsInformation`, {
  sql: `SELECT * FROM   sales_clients_information`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    SalesClients: {
      sql: `${CUBE}.sales_client_id = ${SalesClients}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, questionTitle, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    questionTitle: {
      sql: `question_title`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    value: {
      sql: `value`,
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
