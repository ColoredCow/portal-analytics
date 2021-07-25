cube(`HrJobsRounds`, {
  sql: `SELECT * FROM cc_portal.hr_jobs_rounds`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    HrJobs: {
      sql: `${CUBE}.hr_job_id = ${HrJobs}.id`,
      relationship: `belongsTo`
    },
    
    HrRounds: {
      sql: `${CUBE}.hr_round_id = ${HrRounds}.id`,
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
