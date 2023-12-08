﻿using System.Security.Claims;

namespace AuctionService.IntegrationTests;

public class AuthHelper
{
    public static Dictionary<String, object> GetBearerForUser(string username)
    {
        return new Dictionary<string, object>
        {
            {
                ClaimTypes.Name, username
            }
        };
    }
}
