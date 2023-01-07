import { Menu, Space, Typography, Tag, Card } from "antd";

function App() {
  return (
    <div>
      <Menu
        mode="horizontal"
        items={[
          {
            label: "云平台",
            key: "cloud",
            children: [
              {
                label: "华为云",
                key: "huawei_cloud",
              },
              {
                label: "阿里云",
                key: "aliyun_cloud",
              },
              {
                label: "腾讯云",
                key: "tencent_cloud",
              },
              {
                label: "AWS",
                key: "aws_cloud",
              },
            ],
          },
          {
            label: "数据平台",
            key: "data",
            children: [
              {
                label: <MegaMenu />,
                key: "MegaMenu",
                style: {
                  height: "fit-content",
                },
              },
            ],
          },
          {
            label: "监控平台",
            key: "monitor",
          },
          {
            label: "告警平台",
            key: "alert",
          },
          {
            label: "流程平台",
            key: "workflow",
          },
        ]}
      ></Menu>
    </div>
  );
}

function MegaMenu() {
  // padding元素的左内边距
  return (
    <div
      style={{ backgroundColor: "white", paddingLeft: 100, paddingRight: 20 }}
    >
      <Typography.Title level={3}>数据库服务</Typography.Title>
      <Space direction="horizontal" size={12}>
        <Tag color="red">服务类型如下</Tag>
        <Space direction="horizontal">
          <Menu
            items={[
              {
                label: "关系型数据库",
                key: "relation_ship_database",
                type: "group",
              },
              {
                label: "MySQL",
                key: "mysql_database",
              },
              {
                label: "RDS",
                key: "rds_database",
              },
            ]}
            //boxShadow 设置阴影
            //border 设置边框
            style={{ boxShadow: "none", border: "none" }}
          ></Menu>
          <Menu
            items={[
              {
                label: "NoSQL数据库",
                key: "nosql_database",
                type: "group",
              },
              {
                label: "Redis",
                key: "redis_database",
              },
              {
                label: "Mongo",
                key: "mongo_database",
              },
            ]}
            style={{ boxShadow: "none", border: "none" }}
          ></Menu>
          <Card
            title="服务内容介绍"
            style={{ boxShadow: "none", border: "none" }}
          >
            为开发/测试/运维/DBA提供数据库能力
          </Card>
        </Space>
      </Space>
    </div>
  );
}

export default App;
