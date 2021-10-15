cube(`Projects`, {
  sql: `SELECT * FROM   projects`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Clients: {
      sql: `${CUBE}.client_id = ${Clients}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, clientProjectId, createdAt, updatedAt, startDate, endDate]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    clientProjectId: {
      sql: `client_project_id`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    effortSheetUrl: {
      sql: `effort_sheet_url`,
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
    
    startDate: {
      sql: `start_date`,
      type: `time`
    },
    
    endDate: {
      sql: `end_date`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
