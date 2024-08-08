import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <Card>
        <CardHeader>
          <CardTitle>Edit profile</CardTitle>
            <CardDescription>Make changes to your profile here. Click save when you're done.</CardDescription>
        </CardHeader>
       <CardContent className="grid grid-cols-3 gap-2">
            <div className="flex items-center justify-end">
            <Label htmlFor="email" className="text-right font-bold">Email</Label>
            </div>
            <Input className="col-span-2" id="email" placeholder="Email"/>
       
            <div className="flex items-center justify-end">
            <Label htmlFor="username" className="text-right  font-bold">Username</Label>
            </div>

            <Input className="col-span-2" id="username" placeholder="@pedroduarte"/>
        
        </CardContent>
       <CardFooter className="flex justify-end">
          <Button>Save changes</Button>
      </CardFooter>
      
 
      </Card>
      

      </div>
    </main>
  );
}
