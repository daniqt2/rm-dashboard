enum EStatusIntegration {
  "STATUS_ONE" = "statusOne",
  "STATUS_TWO" = "statusTwo",
}

export interface IIntegration {
  id: number;
  name: string;
  token: string;
  user_id: string;
  status: EStatusIntegration;
}

export enum EIntegrationKeys {
  "NAME" = "name",
  "TOKEN" = "token",
  "USER_ID" = "user_id",
  "STATUS" = "status",
}
