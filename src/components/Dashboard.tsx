import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Monitor, 
  Calendar,
  Play,
  Pause,
  AlertCircle
} from "lucide-react";

export function Dashboard() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$12,840",
      change: "+12.5%",
      icon: DollarSign,
      trend: "up"
    },
    {
      title: "Active Accounts",
      value: "47",
      change: "+3",
      icon: Users,
      trend: "up"
    },
    {
      title: "Netflix Accounts",
      value: "23",
      change: "92% utilization",
      icon: Monitor,
      trend: "neutral"
    },
    {
      title: "Monthly Growth",
      value: "23.1%",
      change: "+4.2%",
      icon: TrendingUp,
      trend: "up"
    }
  ];

  const recentActivity = [
    { user: "john_doe", action: "Renewed Netflix Premium", amount: "$15.99", time: "2 hours ago", status: "active" },
    { user: "sarah_kim", action: "New Disney+ subscription", amount: "$12.99", time: "4 hours ago", status: "active" },
    { user: "mike_wilson", action: "Cancelled Hulu subscription", amount: "-$7.99", time: "6 hours ago", status: "cancelled" },
    { user: "emma_brown", action: "Upgraded to 4K Netflix", amount: "$19.99", time: "1 day ago", status: "active" },
  ];

  const activeAccounts = [
    { service: "Netflix Premium", users: 8, capacity: 4, revenue: "$127.92" },
    { service: "Netflix Standard", users: 6, capacity: 2, revenue: "$83.94" },
    { service: "Disney+ Premium", users: 4, capacity: 4, revenue: "$51.96" },
    { service: "HBO Max", users: 3, capacity: 3, revenue: "$44.97" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Monitor your rental business performance
          </p>
        </div>
        <Badge className="bg-primary/10 text-primary border-primary/20">
          <Calendar className="w-3 h-3 mr-1" />
          Last 30 days
        </Badge>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-gradient-card border-border/50 shadow-glass">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${
                stat.trend === "up" ? "text-emerald-400" : 
                stat.trend === "down" ? "text-red-400" : "text-muted-foreground"
              }`}>
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Active Accounts Overview */}
        <Card className="bg-gradient-card border-border/50 shadow-glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Monitor className="w-5 h-5 text-primary" />
              Active Streaming Accounts
            </CardTitle>
            <CardDescription>
              Account utilization and revenue breakdown
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeAccounts.map((account) => (
              <div key={account.service} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium">{account.service}</span>
                  </div>
                  <span className="text-sm text-primary font-medium">{account.revenue}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Progress 
                    value={(account.users / account.capacity) * 100} 
                    className="flex-1 h-2"
                  />
                  <span className="text-xs text-muted-foreground">
                    {account.users}/{account.capacity} slots
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-gradient-card border-border/50 shadow-glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Latest transactions and account changes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 border border-border/30">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.status === "active" ? "bg-emerald-400" : 
                      activity.status === "cancelled" ? "bg-red-400" : "bg-yellow-400"
                    }`}></div>
                    <div>
                      <p className="font-medium text-sm">{activity.user}</p>
                      <p className="text-xs text-muted-foreground">{activity.action}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium text-sm ${
                      activity.amount.startsWith("-") ? "text-red-400" : "text-emerald-400"
                    }`}>
                      {activity.amount}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-card border-border/50 shadow-glass">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Manage your streaming business efficiently
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-3">
            <button className="p-4 rounded-lg bg-gradient-primary/10 border border-primary/20 hover:bg-gradient-primary/20 transition-all group">
              <Play className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <p className="font-medium">Add New Account</p>
              <p className="text-xs text-muted-foreground">Setup streaming service</p>
            </button>
            <button className="p-4 rounded-lg bg-secondary/50 border border-border/50 hover:bg-secondary/70 transition-all group">
              <Users className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <p className="font-medium">Manage Users</p>
              <p className="text-xs text-muted-foreground">View user subscriptions</p>
            </button>
            <button className="p-4 rounded-lg bg-secondary/50 border border-border/50 hover:bg-secondary/70 transition-all group">
              <DollarSign className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <p className="font-medium">View Reports</p>
              <p className="text-xs text-muted-foreground">Financial analytics</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}