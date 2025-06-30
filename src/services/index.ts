import axios, { AxiosResponse } from "axios";
import { RegisterPayload,  } from "@/store/enterpriseRegister/enterpriseRegisterAction";
import { BaseUrlAccordingPayload } from "@/store/addEndpoint/baseUrlAccordingAction";
import { AddRequestInfoPayload } from "@/store/addRequestInfo/addRequestInfoAction";
import { EndpointOverviewPayload } from "@/store/endpointOverview/endpointOverviewAction";
import { ListEndpointDetailPayload } from "@/store/listEndpointDetail/listEndpointDetailAction";
 

const apiEnterpriseRegister = async (
  payload: RegisterPayload
): Promise<AxiosResponse> => {
  try {
    const response = await axios.post(
      "https://localhost:7253/api/corporate/register",
      {
        mail: payload.mail,
        password: payload.password,
        
      }
    );
    return response;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Axios error occurred");
    }
    throw new Error("Unexpected error occurred");
  }
};

export default apiEnterpriseRegister;

const apiBaseURLAccordingToProject = async (
  payload: BaseUrlAccordingPayload
): Promise<AxiosResponse> => {
  try {
    const response = await axios.get("https://localhost:7221/api/project/getBaseUrlAccordingToProjectId", {
    params: {
      projectId: payload.projectId,
    },
  });

  const responseData = response.data;

  if (responseData.value?.statusCode === 200) {
    return responseData.value;
  } else {
    throw new Error("Failed to fetch base URL");
  }
  } catch (error: string | unknown) {
  if (axios.isAxiosError(error)) {
    return error.response?.data;
  }
    throw new Error("Failed to fetch base URL"); 
  }
};

const apiAddRequestInfo = async (payload: AddRequestInfoPayload): Promise<AxiosResponse> => {
  try {
    const response = await axios.post("https://localhost:7221/api/request/addrequestInfo", {
    baseUrlId: payload.baseUrlId,
    controllerId: payload.controllerId,
    controllerPath: payload.controllerPath,
    actionPath: payload.actionPath,
    requestType: payload.requestType,
    query: payload.query,
    header: payload.header,
    body: payload.body,
  });

  const responseData = response.data;

  return responseData;
  } catch (error) {
  if (axios.isAxiosError(error)) {
    return error.response?.data;
  }
    throw new Error("Failed to add request info");
    
  }
}

const apiProjectEndpointOverview = async (payload: EndpointOverviewPayload): Promise<AxiosResponse> => {
  try {
    const response = await axios.get("https://localhost:7221/api/analysis/projectEndpointOverview", {
      params: {
        projectId: payload.projectId,
      },
    });

    const responseData = response.data;

    if (responseData.value?.statusCode === 200) {
      return responseData.value;
    } else {
      throw new Error("Failed to fetch project endpoint overview");
    }
  } catch (error: string | unknown) {
  if (axios.isAxiosError(error)) {
    return error.response?.data;
  }
    throw new Error("Failed to fetch project endpoint overview");
  }
}

const apiListEndpointDetail = async (payload: ListEndpointDetailPayload
): Promise<AxiosResponse> => {
  try {
    const response = await axios.get("https://localhost:7221/api/endpoint/ListEndpointDetail", {
      params: {
        projectId: payload.projectId,
      },
    });
    const responseData = response.data;
    if (responseData.value?.statusCode === 200) {
      return responseData.value;
    } else {
      throw new Error("Failed to fetch endpoint details");
    }
  } catch (error: string | unknown) {
  if (axios.isAxiosError(error)) {
    return error.response?.data;
  }
    throw new Error("Failed to fetch endpoint details");
  }
}



const getCocktailList = async () => {
    try {
        const data = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin")

    
        return data.data;

    } catch (err: string | unknown) {
        if (axios.isAxiosError(err)) {
            return err.response?.data;
        }
        throw new Error("Error fetching data");
        
    }
}

export {
  getCocktailList, 
  apiEnterpriseRegister, 
  apiBaseURLAccordingToProject, 
  apiAddRequestInfo, 
  apiProjectEndpointOverview, 
  apiListEndpointDetail
};