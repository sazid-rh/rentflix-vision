import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Users, 
  Settings, 
  Monitor, 
  Crown,
  Shield,
  AlertCircle,
  DollarSign,
  Copy,
  Edit,
  Trash2,
  Play
} from "lucide-react";

export function NetflixManager() {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      email: "netflix1@rentflix.com",
      password: "••••••••",
      plan: "Premium",
      maxUsers: 4,
      currentUsers: 3,
      monthlyRevenue: 63.96,
      status: "active",
      users: ["john_doe", "sarah_kim", "mike_wilson"]
    },
    {
      id: 2,
      email: "netflix2@rentflix.com",
      password: "••••••••",
      plan: "Standard",
      maxUsers: 2,
      currentUsers: 2,
      monthlyRevenue: 31.98,
      status: "active",
      users: ["emma_brown", "alex_garcia"]
    },
    {
      id: 3,
      email: "netflix3@rentflix.com",
      password: "••••••••",
      plan: "Premium",
      maxUsers: 4,
      currentUsers: 1,
      monthlyRevenue: 15.99,
      status: "warning",
      users: ["david_lee"]
    }
  ]);

  const [isAddAccountOpen, setIsAddAccountOpen] = useState(false);

  const plans = [
    { name: "Basic", price: 6.99, maxUsers: 1, quality: "720p" },
    { name: "Standard", price: 10.99, maxUsers: 2, quality: "1080p" },
    { name: "Premium", price: 15.99, maxUsers: 4, quality: "4K" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "warning": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "inactive": return "bg-red-500/10 text-red-400 border-red-500/20";
      default: return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  const getPlanIcon = (plan: string) => {
    switch (plan) {
      case "Premium": return <Crown className="w-4 h-4" />;
      case "Standard": return <Shield className="w-4 h-4" />;
      default: return <Monitor className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Netflix Manager
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your Netflix accounts and user assignments
          </p>
        </div>
        <Dialog open={isAddAccountOpen} onOpenChange={setIsAddAccountOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 shadow-glow">
              <Plus className="w-4 h-4 mr-2" />
              Add Account
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md bg-gradient-glass border-border/50">
            <DialogHeader>
              <DialogTitle>Add New Netflix Account</DialogTitle>
              <DialogDescription>
                Setup a new Netflix account for rental management
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="netflix@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="plan">Plan</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select plan" />
                  </SelectTrigger>
                  <SelectContent>
                    {plans.map((plan) => (
                      <SelectItem key={plan.name} value={plan.name.toLowerCase()}>
                        <div className="flex items-center gap-2">
                          {getPlanIcon(plan.name)}
                          <span>{plan.name} - ${plan.price}/month</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Add Account
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-card border-border/50 shadow-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Monitor className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{accounts.length}</p>
                <p className="text-xs text-muted-foreground">Total Accounts</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border/50 shadow-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{accounts.reduce((sum, acc) => sum + acc.currentUsers, 0)}</p>
                <p className="text-xs text-muted-foreground">Active Users</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border/50 shadow-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">${accounts.reduce((sum, acc) => sum + acc.monthlyRevenue, 0).toFixed(2)}</p>
                <p className="text-xs text-muted-foreground">Monthly Revenue</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border/50 shadow-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Play className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{Math.round((accounts.reduce((sum, acc) => sum + acc.currentUsers, 0) / accounts.reduce((sum, acc) => sum + acc.maxUsers, 0)) * 100)}%</p>
                <p className="text-xs text-muted-foreground">Utilization</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Accounts Management */}
      <Tabs defaultValue="accounts" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 bg-secondary/50">
          <TabsTrigger value="accounts">Accounts</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="accounts" className="space-y-4">
          <div className="grid gap-4">
            {accounts.map((account) => (
              <Card key={account.id} className="bg-gradient-card border-border/50 shadow-glass">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        {getPlanIcon(account.plan)}
                        <CardTitle className="text-lg">{account.email}</CardTitle>
                      </div>
                      <Badge className={getStatusColor(account.status)}>
                        {account.status}
                      </Badge>
                      <Badge variant="outline" className="border-primary/20">
                        {account.plan}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="hover:bg-secondary/50">
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-secondary/50">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-red-500/10 hover:text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Users</p>
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                          {account.users.map((user, idx) => (
                            <div key={idx} className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center border-2 border-background">
                              <span className="text-xs font-medium">{user.charAt(0).toUpperCase()}</span>
                            </div>
                          ))}
                          {account.currentUsers < account.maxUsers && (
                            <div className="w-8 h-8 bg-secondary/50 rounded-full flex items-center justify-center border-2 border-dashed border-border/50">
                              <Plus className="w-3 h-3 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {account.currentUsers}/{account.maxUsers}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                      <p className="text-lg font-semibold text-emerald-400">
                        ${account.monthlyRevenue.toFixed(2)}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Utilization</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-secondary/50 rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(account.currentUsers / account.maxUsers) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {Math.round((account.currentUsers / account.maxUsers) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {account.status === "warning" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                      <AlertCircle className="w-4 h-4 text-yellow-400" />
                      <p className="text-sm text-yellow-400">
                        Low utilization - Consider reassigning users or downgrading plan
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card className="bg-gradient-card border-border/50 shadow-glass">
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Assign and manage user access to Netflix accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">User management panel coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card className="bg-gradient-card border-border/50 shadow-glass">
            <CardHeader>
              <CardTitle>Netflix Analytics</CardTitle>
              <CardDescription>Performance metrics and usage analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Monitor className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Analytics dashboard coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}