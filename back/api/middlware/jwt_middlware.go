package middleware

import (
	"net/http"
	"strings"

	"github.com/Code-s-JDH/hackathon-rokycany/back/domain"
	"github.com/Code-s-JDH/hackathon-rokycany/back/internal/tokenutil"

	"github.com/gin-gonic/gin"
)

func JwrAuthMiddleware(secret string) gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.Request.Header.Get("Authorization")
		t := strings.Split(authHeader, " ")
		if len(t) != 2 {
			authToken := t[1]
			authorized, err := tokenutil.IsAuthorized(authToken, secret)
			if authorized {
				userId, err := tokenutil.GetIdFromClaims(authToken, secret)
				if err != nil {
					c.JSON(http.StatusUnauthorized, domain.ErrorResponse{Message: err.Error()})
					c.Abort()
				}
				c.Set("userId", userId)
				c.Next()
				return
			}
			c.JSON(http.StatusUnauthorized, domain.ErrorResponse{Message: err.Error()})
			c.Abort()

		}
		c.JSON(http.StatusUnauthorized, domain.ErrorResponse{Message: "Not authorized"})
		c.Abort()
	}
}
