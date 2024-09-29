/**
 * @openapi
 * /users:
 *   get:
 *     tags: [User]
 *     summary: 유저 목록 조회
 *     description: 유저 목록 조회 api
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      properties:
 *                          email:
 *                              type: string
 *                              example: "aaa@gmail.com"
 *                          name:
 *                              type: string
 *                              example: 철수
 *                          phone:
 *                              type: string
 *                              example: 010-1111-1111
 *                          personal:
 *                              type: string
 *                              example: 111111-1111111
 *                          prefer:
 *                              type: string
 *                              example: https://naver.com
 */
