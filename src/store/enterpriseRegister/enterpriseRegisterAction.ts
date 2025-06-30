export const POST_ENTERPRISE_REGISTER_REQUEST = 'POST_ENTERPRISE_REGISTER_REQUEST';
export const POST_ENTERPRISE_REGISTER_SUCCESS = 'POST_ENTERPRISE_REGISTER_SUCCESS';
export const POST_ENTERPRISE_REGISTER_FAILURE = 'POST_ENTERPRISE_REGISTER_FAILURE';

export interface RegisterPayload {
  mail: string;
  password: string;
  CompanyId?: number;
  InvitationId?: number;
  VerificationCode?: string;
  Verification?: boolean;
}

export const postEnterpriseRegisterRequest = (payload: RegisterPayload) => ({
  type: POST_ENTERPRISE_REGISTER_REQUEST,
  payload,
});
