cube(`ProspectRequirements`, {
  sql: `SELECT * FROM prospect_requirements`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Prospects: {
      sql: `${CUBE}.prospect_id = ${Prospects}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt, updatedAt, exceptedLaunchDate]
    },
    
    resourceRequiredCount: {
      sql: `resource_required_count`,
      type: `sum`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    projectBrief: {
      sql: `project_brief`,
      type: `string`
    },
    
    skills: {
      sql: `skills`,
      type: `string`
    },
    
    notes: {
      sql: `notes`,
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
    
    exceptedLaunchDate: {
      sql: `excepted_launch_date`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
