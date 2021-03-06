/**
 * DEV API (beta)
 * Access DEV articles, users and other resources via API.  All endpoints that don't require authentication are CORS enabled.  Dates and date times, unless otherwise specified, must be in the [RFC 3339](https://tools.ietf.org/html/rfc3339) format.  # Authentication  <!-- ReDoc-Inject: <security-definitions> -->
 *
 * OpenAPI spec version: 0.7.0
 * Contact: yo@dev.to
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * The organization the resource belongs to
 */
export interface SharedOrganization {
  name?: string
  username?: string
  slug?: string
    /**
     * Profile image (640x640)
     */
  profileImage?: string
    /**
     * Profile image (90x90)
     */
  profileImage90?: string
}
