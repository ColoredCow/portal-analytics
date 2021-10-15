cube(`HrApplications`, {
  sql: `SELECT * FROM   hr_applications`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    HrApplicants: {
      sql: `${CUBE}.hr_applicant_id = ${HrApplicants}.id`,
      relationship: `belongsTo`
    },
    
    HrJobs: {
      sql: `${CUBE}.hr_job_id = ${HrJobs}.id`,
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
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    offerLetter: {
      sql: `offer_letter`,
      type: `string`
    },
    
    resume: {
      sql: `resume`,
      type: `string`
    },
    
    autoresponderSubject: {
      sql: `autoresponder_subject`,
      type: `string`
    },
    
    autoresponderBody: {
      sql: `autoresponder_body`,
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
