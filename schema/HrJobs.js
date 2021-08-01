cube(`HrJobs`, {
  sql: `SELECT * FROM hr_jobs`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, title, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    link: {
      sql: `link`,
      type: `string`
    },
    
    facebookPost: {
      sql: `facebook_post`,
      type: `string`
    },
    
    twitterPost: {
      sql: `twitter_post`,
      type: `string`
    },
    
    linkedinPost: {
      sql: `linkedin_post`,
      type: `string`
    },
    
    instagramPost: {
      sql: `instagram_post`,
      type: `string`
    },
    
    status: {
      sql: `status`,
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
    
    deletedAt: {
      sql: `deleted_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
