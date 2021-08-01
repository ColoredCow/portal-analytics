cube(`EmployeeProjectsOld`, {
  sql: `SELECT * FROM employee_projects_old`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Employees: {
      sql: `${CUBE}.employee_id = ${Employees}.id`,
      relationship: `belongsTo`
    },
    
    Projects: {
      sql: `${CUBE}.project_id = ${Projects}.id`,
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
    contributionType: {
      sql: `contribution_type`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
